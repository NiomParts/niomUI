import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { PlusIcon, Star, StarFilled } from "@components/atoms";

import { ACCORDION_VARIANTS } from "./constants/Accordion.constants";
import { Accordion } from "./components/Accordion";
import { AccordionItem } from "./components/AccordionItem";

describe("Accordion", () => {
  it("opens the default active item", () => {
    render(
      <Accordion defaultActiveKey={1}>
        <AccordionItem label="First">First content</AccordionItem>
        <AccordionItem label="Second">Second content</AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "First" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "Second" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("button", { name: "First" })).toHaveClass(
      "niom-focus-ring",
    );
  });

  it("keeps only one item open by default", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Accordion defaultActiveKey={0} onChange={onChange}>
        <AccordionItem label="First">First content</AccordionItem>
        <AccordionItem label="Second">Second content</AccordionItem>
      </Accordion>,
    );

    await user.click(screen.getByRole("button", { name: "Second" }));

    expect(screen.getByRole("button", { name: "First" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "Second" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(onChange).toHaveBeenCalledWith([1]);
  });

  it("allows multiple items to stay open", async () => {
    const user = userEvent.setup();

    render(
      <Accordion multiple defaultActiveKey={0}>
        <AccordionItem label="First">First content</AccordionItem>
        <AccordionItem label="Second">Second content</AccordionItem>
      </Accordion>,
    );

    await user.click(screen.getByRole("button", { name: "Second" }));

    expect(screen.getByRole("button", { name: "First" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("button", { name: "Second" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("does not toggle disabled items", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Accordion onChange={onChange}>
        <AccordionItem label="Disabled" disabled>
          Disabled content
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Disabled" });

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("renders header and footer inside the panel", () => {
    render(
      <Accordion defaultActiveKey={0}>
        <AccordionItem
          label="Details"
          header={<span>Panel header</span>}
          footer={<span>Panel footer</span>}
        >
          Panel body
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByText("Panel header")).toBeInTheDocument();
    expect(screen.getByText("Panel body")).toBeInTheDocument();
    expect(screen.getByText("Panel footer")).toBeInTheDocument();
  });

  it("supports every variant", () => {
    render(
      <div>
        {ACCORDION_VARIANTS.map((variant) => (
          <Accordion key={variant} variant={variant} defaultActiveKey={0}>
            <AccordionItem label={`${variant} item`}>
              {variant} content
            </AccordionItem>
          </Accordion>
        ))}
      </div>,
    );

    for (const variant of ACCORDION_VARIANTS) {
      expect(screen.getByRole("button", { name: `${variant} item` })).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    }
  });

  it("sets data attributes for supported icon positions", () => {
    render(
      <Accordion multiple defaultActiveKey={[0, 1]}>
        <AccordionItem label="Left" icon={<PlusIcon size={16} />} iconPosition="left">
          Left content
        </AccordionItem>
        <AccordionItem label="Right" icon={<PlusIcon size={16} />} iconPosition="right">
          Right content
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Left" })).toHaveAttribute(
      "data-icon-position",
      "left",
    );
    expect(screen.getByRole("button", { name: "Right" })).toHaveAttribute(
      "data-icon-position",
      "right",
    );
  });

  it("swaps to the active icon when open", () => {
    render(
      <Accordion defaultActiveKey={0}>
        <AccordionItem
          label="Rating"
          icon={<Star data-testid="inactive-icon" size={16} />}
          activeIcon={<StarFilled data-testid="active-icon" size={16} />}
        >
          Rating content
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByTestId("active-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("inactive-icon")).not.toBeInTheDocument();
  });

  it("supports header positions", () => {
    render(
      <Accordion multiple defaultActiveKey={[0, 1, 2, 3]}>
        <AccordionItem label="Top" headerPosition="top">
          Top content
        </AccordionItem>
        <AccordionItem label="Bottom" headerPosition="bottom">
          Bottom content
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Top" })).toHaveAttribute(
      "data-position",
      "top",
    );
    expect(screen.getByRole("button", { name: "Bottom" })).toHaveAttribute(
      "data-position",
      "bottom",
    );
  });

  it("keeps nested accordion indexes independent", async () => {
    const user = userEvent.setup();

    render(
      <Accordion defaultActiveKey={0}>
        <AccordionItem label="Outer filters">
          <Accordion defaultActiveKey={0}>
            <AccordionItem label="Inner first">Inner first content</AccordionItem>
            <AccordionItem label="Inner second">Inner second content</AccordionItem>
          </Accordion>
        </AccordionItem>
        <AccordionItem label="Outer shipping">Outer shipping content</AccordionItem>
      </Accordion>,
    );

    await user.click(screen.getByRole("button", { name: "Inner second" }));

    expect(screen.getByRole("button", { name: "Outer filters" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("button", { name: "Inner first" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "Inner second" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByRole("button", { name: "Outer shipping" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("connects triggers to regions with aria attributes", () => {
    render(
      <Accordion id="filters" defaultActiveKey={0}>
        <AccordionItem label="Categories">Category content</AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Categories" });
    const region = screen.getByRole("region");

    expect(trigger).toHaveAttribute("id", "filters-header-0");
    expect(region).toHaveAttribute("id", "filters-content-0");
    expect(trigger).toHaveAttribute("aria-controls", region.id);
    expect(region).toHaveAttribute("aria-labelledby", trigger.id);
  });

  it("throws when an item is rendered without a parent accordion", () => {
    expect(() =>
      render(<AccordionItem label="Broken">Content</AccordionItem>),
    ).toThrow("AccordionItem must be used within an Accordion");
  });

  it("renders content inside the correct region", () => {
    render(
      <Accordion defaultActiveKey={0}>
        <AccordionItem label="Details">Panel body</AccordionItem>
      </Accordion>,
    );

    const region = screen.getByRole("region");
    expect(within(region).getByText("Panel body")).toBeInTheDocument();
  });
});
