import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Cart,
  Check,
  Cross,
  Eye,
  EyeOff,
  Heart,
  Menu,
  Search,
  Star,
  StarFilled,
  HalfStarFilled,
  LoginIcon,
  Profile,
  DropDown,
  GoogleLogo,
  FacebookLogo,
  GitHubLogo,
  InstagramLogo,
  TikTokLogo,
  PaypalLogo,
  MCBLogo,
  WhatsAppLogo,
  MasterCard,
  PlusIcon,
  MinusIcon,
  MailIcon,
  PhoneIcon,
  InformationIcon,
  HomeIcon,
  BitcoinLogo,
  TruckIcon,
  WarningIcon,
} from "./Icon";

describe("Icons", () => {
  const icons = [
    { name: "Menu", icon: Menu },
    { name: "Cross", icon: Cross },
    { name: "Cart", icon: Cart },
    { name: "Check", icon: Check },
    { name: "Eye", icon: Eye },
    { name: "EyeOff", icon: EyeOff },
    { name: "Heart", icon: Heart },
    { name: "ArrowDown", icon: ArrowDown },
    { name: "ArrowUp", icon: ArrowUp },
    { name: "ArrowLeft", icon: ArrowLeft },
    { name: "ArrowRight", icon: ArrowRight },
    { name: "Search", icon: Search },
    { name: "Star", icon: Star },
    { name: "StarFilled", icon: StarFilled },
    { name: "HalfStarFilled", icon: HalfStarFilled },
    { name: "LoginIcon", icon: LoginIcon },
    { name: "Profile", icon: Profile },
    { name: "DropDown", icon: DropDown },
    { name: "GoogleLogo", icon: GoogleLogo },
    { name: "FacebookLogo", icon: FacebookLogo },
    { name: "GitHubLogo", icon: GitHubLogo },
    { name: "InstagramLogo", icon: InstagramLogo },
    { name: "TikTokLogo", icon: TikTokLogo },
    { name: "PaypalLogo", icon: PaypalLogo },
    { name: "MCBLogo", icon: MCBLogo },
    { name: "WhatsAppLogo", icon: WhatsAppLogo },
    { name: "MasterCard", icon: MasterCard },
    { name: "PlusIcon", icon: PlusIcon },
    { name: "MinusIcon", icon: MinusIcon },
    { name: "MailIcon", icon: MailIcon },
    { name: "PhoneIcon", icon: PhoneIcon },
    { name: "InformationIcon", icon: InformationIcon },
    { name: "HomeIcon", icon: HomeIcon },
    { name: "BitcoinLogo", icon: BitcoinLogo },
    { name: "TruckIcon", icon: TruckIcon },
    { name: "WarningIcon", icon: WarningIcon },
  ];

  icons.forEach(({ name, icon: Icons }) => {
    describe(`${name} Icon`, () => {
      it("renders correctly with default props", () => {
        const { container } = render(<Icons />);
        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
