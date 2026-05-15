interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="page-banner">
      <img src={image} alt="" loading="eager" />
      <div className="banner-inner container-x">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
