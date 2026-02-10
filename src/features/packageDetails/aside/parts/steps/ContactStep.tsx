"use client";

import React from "react";
import { Globe, Mail, MapPin, Phone, User } from "lucide-react";
import TextField from "../fields/TextField";

export default function ContactStep({
  fullName,
  setFullName,
  mobile,
  setMobile,
  email,
  setEmail,
  country,
  setCountry,
  stateRegion,
  setStateRegion,
  city,
  setCity,
}: {
  fullName: string;
  setFullName: (v: string) => void;
  mobile: string;
  setMobile: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  country: string;
  setCountry: (v: string) => void;
  stateRegion: string;
  setStateRegion: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
}) {
  return (
    <div>
      <div className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-emerald-700" />
            <h4 className="text-sm font-semibold text-slate-900">Contact Details</h4>
          </div>
          <span className="badge badge-ghost badge-sm">Step 2/3</span>
        </div>
        <p className="mt-2 text-xs text-slate-700">
          Share your details so we can send the quote and clarifications.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <TextField
          name="name"
          label="Full Name"
          icon={<User className="h-4 w-4" />}
          required
          value={fullName}
          onChange={setFullName}
          autoComplete="name"
        />
        <TextField
          name="mobile"
          type="tel"
          label="Mobile"
          icon={<Phone className="h-4 w-4" />}
          required
          value={mobile}
          onChange={setMobile}
          inputMode="tel"
          autoComplete="tel"
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          icon={<Mail className="h-4 w-4" />}
          required
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
        <TextField
          name="country"
          label="Country"
          icon={<Globe className="h-4 w-4" />}
          value={country}
          onChange={setCountry}
          autoComplete="country-name"
        />
        <TextField
          name="state"
          label="State"
          icon={<MapPin className="h-4 w-4" />}
          value={stateRegion}
          onChange={setStateRegion}
          autoComplete="address-level1"
        />
        <TextField
          name="place"
          label="City"
          icon={<MapPin className="h-4 w-4" />}
          value={city}
          onChange={setCity}
          autoComplete="address-level2"
        />
      </div>
    </div>
  );
}
