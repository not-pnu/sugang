interface HomeInputProps {
  placeholder: string;
  type: string;
  label: string;
}

export default function HomeInput({
  placeholder,
  type,
  label,
}: HomeInputProps) {
  return (
    <div className="flex gap-x-4 items-center w-full">
      <label className="font-bold text-pnuText text-end min-w-72">{label}</label>
      <input
        type={type}
        className="border-2 focus:outline-none rounded p-4 w-full"
        placeholder={placeholder}
      />
    </div>
  );
}
