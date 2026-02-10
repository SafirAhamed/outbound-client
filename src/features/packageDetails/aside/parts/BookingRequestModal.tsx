"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarRange,
  X,
} from "lucide-react";
import { addDays } from "date-fns";
import { BookingPricing } from "@/types/booking.types";
import { Range } from "react-date-range";
import ModalPortal from "@/src/components/common/layout/ModalPortal";
import { useToast } from "@/src/context/ToastContext";
import api from "@/src/lib/axiosInstance";
import { API_URLS } from "@/src/api/apiUrls";
import StepLineStepper from "@/src/components/common/StepLineStepper";
import Button from "@/src/components/common/Button";
import TravelStep from "./steps/TravelStep";
import ContactStep from "./steps/ContactStep";
import NotesStep from "./steps/NotesStep";

export default function BookingRequestModal({
  onClose,
  pricing,
  currency,
}: {
  onClose: () => void;
  pricing: BookingPricing;
  currency: string;
}) {
  void pricing;
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [comments, setComments] = useState("");

  const [step, setStep] = useState<0 | 1 | 2>(0);

  const start = range[0].startDate;
  const end = range[0].endDate;

  const isTravelValid = () => {
    if (!start || !end) return false;
    if (new Date(end).getTime() < new Date(start).getTime()) return false;
    if (adults < 1) return false;
    return true;
  };

  const isContactValid = () => {
    if (!fullName.trim()) return false;
    if (!mobile.trim()) return false;
    const emailValue = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(emailValue)) return false;
    return true;
  };

  const canSubmit = isTravelValid() && isContactValid() && !submitting;

  const canGoNext =
    !submitting &&
    (step === 0 ? isTravelValid() : step === 1 ? isContactValid() : false);

  const validateTravel = () => {
    if (!start || !end) {
      showToast("Please select travel dates.", "error");
      return false;
    }
    if (new Date(end).getTime() < new Date(start).getTime()) {
      showToast("End date must be after start date.", "error");
      return false;
    }
    if (adults < 1) {
      showToast("At least 1 adult is required.", "error");
      return false;
    }
    return true;
  };

  const validateContact = () => {
    if (!fullName.trim()) {
      showToast("Please enter your full name.", "error");
      return false;
    }
    if (!mobile.trim()) {
      showToast("Please enter your mobile number.", "error");
      return false;
    }
    const emailValue = email.trim();
    const emailOk = /^\S+@\S+\.\S+$/.test(emailValue);
    if (!emailOk) {
      showToast("Please enter a valid email address.", "error");
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (submitting) return;
    if (step === 0) {
      if (!validateTravel()) return;
      setStep(1);
      return;
    }
    if (step === 1) {
      if (!validateContact()) return;
      setStep(2);
      return;
    }
  };

  const submitRequest = async () => {
    if (submitting) return;
    if (!validateTravel()) return;
    if (!validateContact()) {
      setStep(1);
      return;
    }

    setSubmitting(true);
    const startDate = start ? new Date(start) : null;
    const endDate = end ? new Date(end) : null;
    const payload = {
      start_date: startDate ? startDate.toISOString().slice(0, 10) : undefined,
      end_date: endDate ? endDate.toISOString().slice(0, 10) : undefined,
      adults,
      children,
      infants,
      full_name: fullName.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      country: country.trim(),
      state: stateRegion.trim(),
      city: city.trim(),
      comments: comments.trim(),
    };

    try {
      await api.post(API_URLS.bookingEnquiry, payload);
      // showToast("Request submitted successfully.", "success");
      setSubmitted(true);
      setStep(0);
    } catch (err) {
      console.error(err);
      showToast("Failed to submit request. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-1000">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 flex flex-col h-[70vh] max-h-[70vh] overflow-hidden">
            <Button
              onClick={onClose}
              className="btn btn-circle btn-xs absolute right-3 top-3 bg-white text-slate-700 shadow z-10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="px-5 pt-5 pb-3">
              <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <CalendarRange className="h-5 w-5 text-blue-600" />
                Get Quote
              </h3>
              <p className="mt-1 text-[11px] text-slate-500">
                Quick request. We respond fast.
              </p>
              {!submitted && (
                <div className="mt-2">
                  <StepLineStepper currentStep={step} steps={["Travel", "Contact", "Notes"]} />
                </div>
              )}
            </div>
            <div className="h-px bg-slate-200" />

            {!submitted ? (
              <form
                onSubmit={(e) => {
                  // Prevent Enter key from auto-submitting.
                  e.preventDefault();
                }}
                className="flex-1 overflow-y-auto px-5 py-4 space-y-5"
              >
                {step === 0 && (
                  <TravelStep
                    range={range}
                    setRange={setRange}
                    adults={adults}
                    setAdults={setAdults}
                    childCount={children}
                    setChildCount={setChildren}
                    infants={infants}
                    setInfants={setInfants}
                  />
                )}

                {step === 1 && (
                  <ContactStep
                    fullName={fullName}
                    setFullName={setFullName}
                    mobile={mobile}
                    setMobile={setMobile}
                    email={email}
                    setEmail={setEmail}
                    country={country}
                    setCountry={setCountry}
                    stateRegion={stateRegion}
                    setStateRegion={setStateRegion}
                    city={city}
                    setCity={setCity}
                  />
                )}

                {step === 2 && (
                  <NotesStep
                    adults={adults}
                    childCount={children}
                    infants={infants}
                    start={start}
                    end={end}
                    currency={currency}
                    comments={comments}
                    setComments={setComments}
                  />
                )}

                <div className="flex justify-between gap-2 pt-1">
                  <Button
                    onClick={() => {
                      if (step === 0) onClose();
                      else setStep((s) => (s === 0 ? 0 : ((s - 1) as 0 | 1 | 2)));
                    }}
                    className="btn btn-ghost btn-sm"
                  >
                    {step === 0 ? "Cancel" : "Back"}
                  </Button>

                  {step < 2 ? (
                    <Button
                      className="btn btn-primary btn-sm min-w-[140px]"
                      disabled={!canGoNext}
                      onClick={goNext}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      className="btn btn-primary btn-sm min-w-[140px] relative"
                      disabled={!canSubmit}
                      onClick={submitRequest}
                    >
                      <span className={submitting ? "opacity-0" : "opacity-100"}>
                        Submit Request
                      </span>
                      {submitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="loading loading-spinner loading-xs" />
                        </span>
                      )}
                    </Button>
                  )}
              </div>
              </form>
            ) : (
              <div className="flex-1 px-5 py-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center max-w-md">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h4 className="text-slate-900 font-semibold text-base">Submitted Successfully</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Thank you for your request. Our team will contact you as soon as possible.
                      We’re experiencing high volume, so responses may take a little longer.
                    </p>
                    <div className="mt-4">
                      <Button className="btn btn-primary btn-sm" onClick={onClose}>
                        Okay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
