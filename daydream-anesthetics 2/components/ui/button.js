export function Button({ className = '', children, ...props }) {
  return (
    <button className={`rounded-lg px-4 py-2 font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
}
