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
  CardIcon,
  LockIcon,
  ShieldIcon,
  ServerIcon,
  CoffeeIcon,
  EditIcon,
  MoneroIcon,
  PlainBitcoinLogo,
  DogecoinLogo,
  LitecoinLogo,
  SolanaIcon,
  EthLogo,
  TrashIcon,
  CalenderIcon,
  BagIcon,
  AttachmentIcon,
  MaximiseIcon,
  MinimiseIcon,
  SettingsIcon,
  Download,
} from "./icons";
import { Icon } from "./Icon";

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
    { name: "HomeIcon", icon: HomeIcon },
    { name: "PhoneIcon", icon: PhoneIcon },
    { name: "MailIcon", icon: MailIcon },
    { name: "InformationIcon", icon: InformationIcon },
    { name: "BitcoinIcon", icon: BitcoinLogo },
    { name: "TruckIcon", icon: TruckIcon },
    { name: "WarningIcon", icon: WarningIcon },
    { name: "CardICon", icon: CardIcon },
    { name: "LockIcon", icon: LockIcon },
    { name: "ShieldIcon", icon: ShieldIcon },
    { name: "ServerIcon", icon: ServerIcon },
    { name: "CoffeIcon", icon: CoffeeIcon },
    { name: "EditIcon", icon: EditIcon },
    { name: "MoneroIcon", icon: MoneroIcon },
    { name: "PlainBitcoinIcon", icon: PlainBitcoinLogo },
    { name: "DogecoinIcon", icon: DogecoinLogo },
    { name: "LitecoinIcon", icon: LitecoinLogo },
    { name: "SolanaIcon", icon: SolanaIcon },
    { name: "EthIcon", icon: EthLogo },
    { name: "TrashIcon", icon: TrashIcon },
    { name: "CalenderIcon", icon: CalenderIcon },
    { name: "BagIcon", icon: BagIcon },
    { name: "AttachmentIcon", icon: AttachmentIcon },
    { name: "MaximiseIcon", icon: MaximiseIcon },
    { name: "MinimiseIcon", icon: MinimiseIcon },
    { name: "SettingsIcon", icon: SettingsIcon },
    { name: "DownloadIcon", icon: Download },
  ];

  icons.forEach(({ name, icon: Icons }) => {
    describe(`${name} Icon`, () => {
      it("renders correctly with default props", () => {
        const { container } = render(<Icons />);
        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });

  describe("Icon Component", () => {
    icons.forEach(({ name, icon: Icons }) => {
      it(`renders ${name} icon correctly`, () => {
        const { container } = render(<Icon icon={Icons} />);
        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
