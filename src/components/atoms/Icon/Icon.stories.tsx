import type { Meta, StoryObj, StoryFn } from "@storybook/react";
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
  Star,
  StarFilled,
  HalfStarFilled,
  LoginIcon,
  Profile,
  DropDown,
  GoogleLogo,
  GitHubLogo,
  FacebookLogo,
  InstagramLogo,
  WhatsAppLogo,
  TikTokLogo,
  PaypalLogo,
  MCBLogo,
  MasterCard,
  PlusIcon,
  MinusIcon
} from "./Icon";
import type { SVGprops } from "@type/components/atoms";
import { Search } from "./Icon";

const meta = {
  title: "Atoms/Icons",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const createTemplate = (IconComponent: React.FC<SVGprops>) => {
  const Template: StoryFn<SVGprops> = (args) => <IconComponent {...args} />;
  return Template;
};

export const MenuIcon: Story = {
  render: createTemplate(Menu),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const CrossIcon: Story = {
  render: createTemplate(Cross),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const CartIcon: Story = {
  render: createTemplate(Cart),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const CheckIcon: Story = {
  render: createTemplate(Check),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const EyeIcon: Story = {
  render: createTemplate(Eye),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const EyeOffIcon: Story = {
  render: createTemplate(EyeOff),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const HeartIcon: Story = {
  render: createTemplate(Heart),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const ArrowDownIcon: Story = {
  render: createTemplate(ArrowDown),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const ArrowUpIcon: Story = {
  render: createTemplate(ArrowUp),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const ArrowRightIcon: Story = {
  render: createTemplate(ArrowRight),
  args: {
    className: "text-primary",
    size: 24,
  } as SVGprops,
};

export const ArrowLeftIcon: Story = {
  render: createTemplate(ArrowLeft),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const SearchIcon: Story = {
  render: createTemplate(Search),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const StarIcon: Story = {
  render: createTemplate(Star),
  args: {
    color: "yellow",
    size: 24,
  } as SVGprops,
};

export const StarFilledIcon: Story = {
  render: createTemplate(StarFilled),
  args: {
    color: "yellow",
    size: 24,
  } as SVGprops,
};

export const HalfStarFilledIcon: Story = {
  render: createTemplate(HalfStarFilled),
  args: {
    color: "yellow",
    size: 24,
  } as SVGprops,
};

export const LoginIconStory: Story = {
  render: createTemplate(LoginIcon),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const ProfileIconStory: Story = {
  render: createTemplate(Profile),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const DropDownIconStory: Story = {
  render: createTemplate(DropDown),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const GoogleLogoIconStory: Story = {
  render: createTemplate(GoogleLogo),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const GitHubLogoIconStory: Story = {
  render: createTemplate(GitHubLogo),
  args: {
    color: "White",
    size: 24,
  } as SVGprops,
};

export const FacebookLogoIconStory: Story = {
  render: createTemplate(FacebookLogo),
  args: {
    color: "blue",
    size: 24,
  } as SVGprops,
};

export const WhatsappLogoIconStory: Story = {
  render: createTemplate(WhatsAppLogo),
  args: {
    size: 20,
  } as SVGprops,
};

export const InstagramLogoIconStory: Story = {
  render: createTemplate(InstagramLogo),
  args: {
    size: 30,
  } as SVGprops,
};

export const TikTokLogoIconStory: Story = {
  render: createTemplate(TikTokLogo),
  args: {
    color: "none",
    size: 24,
  } as SVGprops,
};

export const PaypalLogoIconStory: Story = {
  render: createTemplate(PaypalLogo),
  args: {
    size: 24,
  } as SVGprops,
};

export const MCBLogoIconStory: Story = {
  render: createTemplate(MCBLogo),
  args: {
    size: 30,
  } as SVGprops,
};

export const MasterCardLogoIconStory: Story = {
  render: createTemplate(MasterCard),
  args: {
    size: 30,
  } as SVGprops,
};

export const PlusIconStory: Story = {
  render: createTemplate(PlusIcon),
  args: {
    size: 24,
    color: "white",
  } as SVGprops,
};

export const MinusIconStory: Story = {
  render: createTemplate(MinusIcon),
  args: {
    size: 24,
    color: "white",
  } as SVGprops,
};
