interface HeaderProps {
  headerTitle: string;
  headerLabel: string;
}

const Header = ({
  headerTitle,
  headerLabel,
}: HeaderProps) => {
  return (
    <div className="grid gap-2 text-center">
      <h1 className="text-3xl font-bold">{headerTitle}</h1>
      <p className="text-balance text-muted-foreground">
        {headerLabel}
      </p>
    </div>
  );
}

export default Header;