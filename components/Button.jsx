export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-amber-400 px-6 py-1.5 rounded-3xl hover:bg-amber-500 duration-200 cursor-pointer ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
