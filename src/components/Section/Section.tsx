import classes from "./section.module.css";
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className={classes["section-container"]}>
      <h2 className={classes["section-title"]}>{title}</h2>
      <div className={classes["section-content"]}>{children}</div>
    </section>
  );
};
