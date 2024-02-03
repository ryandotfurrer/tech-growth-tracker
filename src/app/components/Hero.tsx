type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <header className="flow mx-auto py-24 text-center lg:py-48">
      <h1>{title}</h1>
      <p className="text-balance text-2xl leading-tight tracking-tighter">
        {description}
      </p>
    </header>
  );
}
