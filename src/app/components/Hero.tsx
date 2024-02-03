type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <header>
      <h1>{title}</h1>
      <p className="text-2xl">{description}</p>
    </header>
  );
}
