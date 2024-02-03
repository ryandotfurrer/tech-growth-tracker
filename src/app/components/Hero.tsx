type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <header className="flow mx-auto max-w-prose py-36 text-center">
      <h1>{title}</h1>
      <p className="text-balance text-2xl">{description}</p>
    </header>
  );
}
