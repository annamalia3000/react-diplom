import classes from "./sectionFooter.module.css";
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const SectionFooter = ({ title, children }: SectionProps) => {
  return (
    <section className={classes["section-container"]}>
      <h2 className={classes["section-title"]}>{title}</h2>
      <div className={classes["section-content"]}>{children}</div>
    </section>
  );
};
