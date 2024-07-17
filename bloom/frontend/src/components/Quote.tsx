interface quoteProps {
  label: string;
  author: string;
}
const Quote = ({ label, author }: quoteProps) => {
  return (
    <div className="bg-[#99f6e4] hidden lg:visible max-w-[50%] h-screen lg:flex items-center justify-center p-8">
      <div>
        <p className="text-2xl font-bold">{label}</p>
        <p className="text-lg font-semibold mt-2">{author}</p>
      </div>
    </div>
  );
};

export default Quote;
