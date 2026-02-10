import React from "react";
export default function TextField({
  name,
  label,
  icon,
  placeholder,
  type = "text",
  required,
  value,
  onChange,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (next: string) => void;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="space-y-1">
      <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
        {icon}
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={onChange ? (e) => onChange(e.currentTarget.value) : undefined}
        className="input input-bordered input-sm w-full"
      />
    </div>
  );
}