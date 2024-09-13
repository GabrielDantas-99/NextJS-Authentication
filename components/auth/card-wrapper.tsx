import Link from "next/link";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";

interface CardWrapperProps {
  headerTitle: string;
  headerLabel: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonRef: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonRef,
  showSocial
}: CardWrapperProps) => {
  return (
    <div className="mx-auto grid max-w-[400px] gap-6">
      <Header
        headerTitle={headerTitle}
        headerLabel={headerLabel}
      />
      {children}
      {showSocial && (
        <Social />
      )}
      <BackButton label={backButtonLabel} href={backButtonRef} />
    </div>
  );
}

export default CardWrapper;