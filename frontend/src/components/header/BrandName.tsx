interface BrandNameProps {
  children: React.ReactNode;
}

const BrandName = ({ children }: BrandNameProps) => {
  return <span className="text-6xl">{children}</span>;
};

export default BrandName;
