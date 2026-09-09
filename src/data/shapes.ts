import {
  BoxSelect,
  PackageOpen,
  Lock,
  ArrowDownUp,
  ArrowDown,
  Layers,
  Box,
  Boxes,
  Package,
  Leaf,
  Gem,
  SquareStack,
  RectangleHorizontal,
  Magnet,
} from "lucide-react";
import {
  MailerBoxIcon,
  WindowBoxIcon,
} from "@/components/icons/category-icons";
import type { LucideIcon } from "lucide-react";

export interface ShapeItem {
  name: string;
  slug: string;
  icon: any;
  description: string;
  images?: string[];
  hoverImage?: string;
}

export const shapes: ShapeItem[] = [
  {
    name: "Custom Auto Lock Boxes",
    slug: "auto-lock-boxes",
    icon: BoxSelect,
    description:
      "Auto lock boxes feature a secure bottom that snaps into place automatically, making assembly quick and effortless. Ideal for retail and e-commerce packaging.",
    images: [
      "/images/By Style 2/Auto Lock Boxes/Untitled design.png",
      "/images/By Style 2/Auto Lock Boxes/werg.png",
      "/images/categories/auto_lock_2.jpg",
      "/images/categories/auto_lock_3.jpg",
      "/images/categories/auto_lock_4.jpg",
    ],
    hoverImage: "/images/By Style 2/Auto Lock Boxes/werg.png",
  },
  {
    name: "Custom Gable Boxes",
    slug: "gable-boxes",
    icon: PackageOpen,
    description:
      "Gable boxes come with a built-in handle on top, perfect for gift packaging, party favors, and food takeout containers.",
    images: [
      "/images/By Style 2/gable box/egh.png",
      "/images/By Style 2/gable box/qecsa.png",
      "/images/categories/gable_1.jpg",
      "/images/categories/gable_2.jpg",
      "/images/categories/gable_3.jpg",
      "/images/categories/gable_4.jpg",
    ],
    hoverImage: "/images/By Style 2/gable box/qecsa.png",
  },
  {
    name: "Custom Interlock Boxes",
    slug: "interlock-boxes",
    icon: Lock,
    description:
      "Interlock boxes use interlocking flaps for a secure closure without adhesive, providing sturdy and reliable packaging for various products.",
    images: [
      "/images/By Style 2/Inter lock boces/qewf.png",
      "/images/By Style 2/Inter lock boces/Untitled design.png",
      "/images/categories/interlock_1.jpg",
      "/images/categories/interlock_2.jpg",
      "/images/categories/interlock_3.jpg",
    ],
    hoverImage: "/images/By Style 2/Inter lock boces/Untitled design.png",
  },
  {
    name: "Custom Mailer Boxes",
    slug: "mailer-boxes",
    icon: MailerBoxIcon,
    description:
      "Mailer boxes are durable corrugated boxes designed for shipping and e-commerce, with a tuck-top closure and excellent print area for branding.",
    images: [
      "/images/By Style 2/Mailer Boxes/aefg.png",
      "/images/By Style 2/Mailer Boxes/Untitled design.png",
      "/images/categories/mailer_1.jpg",
      "/images/categories/mailer_2.jpg",
      "/images/categories/mailer_3.jpg",
      "/images/categories/mailer_4.jpg",
      "/images/categories/mailer_5.jpg",
      "/images/categories/mailer_6.jpg",
      "/images/categories/mailer_7.jpg",
    ],
    hoverImage: "/images/By Style 2/Mailer Boxes/Untitled design.png",
  },
  {
    name: "Custom Reverse Tuck Boxes",
    slug: "reverse-tuck-boxes",
    icon: ArrowDownUp,
    description:
      "Reverse tuck end boxes have flaps that open from opposite directions, providing a clean presentation and easy access to the product inside.",
    images: [
      "/images/By Style 2/Reverse Tuck Boxes/dafs.png",
      "/images/By Style 2/Reverse Tuck Boxes/dafsdb.png",
      "/images/categories/reverse_tuck_1.jpg",
      "/images/categories/reverse_tuck_2.jpg",
      "/images/categories/reverse_tuck_3.jpg",
      "/images/categories/reverse_tuck_4.jpg",
    ],
    hoverImage: "/images/By Style 2/Reverse Tuck Boxes/dafsdb.png",
  },
  {
    name: "Custom Straight Tuck Boxes",
    slug: "straight-tuck-boxes",
    icon: ArrowDown,
    description:
      "Straight tuck end boxes have both flaps tucking in the same direction, offering a sleek look ideal for retail shelving and display.",
    images: [
      "/images/By Style 2/Stright tuck boxes/dav.png",
      "/images/By Style 2/Stright tuck boxes/febfgdf.png",
      "/images/categories/straight_tuck_1.jpg",
      "/images/categories/straight_tuck_2.jpg",
      "/images/categories/straight_tuck_3.jpg",
      "/images/categories/straight_tuck_4.jpg",
    ],
    hoverImage: "/images/By Style 2/Stright tuck boxes/febfgdf.png",
  },
  {
    name: "Custom Window Boxes",
    slug: "window-boxes",
    icon: WindowBoxIcon,
    description:
      "Window boxes feature a die-cut window with clear film, allowing customers to see the product inside while keeping it protected.",
    images: [
      "/images/By Style 2/Window Boxes/Untitled design.png",
      "/images/By Style 2/Window Boxes/wegr.png",
      "/images/categories/window_1.jpg",
      "/images/categories/window_2.jpg",
      "/images/categories/window_3.jpg",
    ],
    hoverImage: "/images/By Style 2/Window Boxes/wegr.png",
  },
  {
    name: "Custom Magnetic Closure Boxes",
    slug: "magnetic-closure-boxes",
    icon: Magnet,
    description:
      "Magnetic closure boxes feature hidden magnets for a seamless, elegant opening experience. Perfect for luxury products, gifts, and premium brand packaging.",
    images: [
      "/images/By Style 2/Magnetic closure box/dsafbv.png",
      "/images/By Style 2/Magnetic closure box/Untitled design.png",
      "/images/categories/magnetic_1.jpg",
      "/images/categories/magnetic_2.jpg",
      "/images/categories/magnetic_3.jpg",
      "/images/categories/magnetic_4.jpg",
      "/images/categories/magnetic_5.jpg",
    ],
    hoverImage: "/images/By Style 2/Magnetic closure box/Untitled design.png",
  },
  {
    name: "Custom Lid and Bottom Boxes",
    slug: "lid-and-bottom-boxes",
    icon: Package,
    description:
      "Lid and bottom boxes feature a separate two-piece construction where the lid fits snugly over the base. Perfect for luxury products, gifts, and premium retail packaging.",
    images: [
      "/images/By Style 2/Lid and bottom/advfe.png",
      "/images/By Style 2/Lid and bottom/Untitled design.png",
    ],
    hoverImage: "/images/By Style 2/Lid and bottom/Untitled design.png",
  },
  {
    name: "Custom Sleeve and Tray Boxes",
    slug: "sleeve-and-tray-boxes",
    icon: Boxes,
    description:
      "Sleeve and tray boxes combine a sliding outer sleeve with an inner tray, offering a premium unboxing experience ideal for cosmetics, jewellery, and luxury gifting.",
    images: [
      "/images/By Style 2/Sleeve and Tray/dafsvd.png",
      "/images/By Style 2/Sleeve and Tray/davf.png",
    ],
    hoverImage: "/images/By Style 2/Sleeve and Tray/davf.png",
  },
];

export const materials: ShapeItem[] = [
  {
    name: "Custom Cardboard",
    slug: "cardboard",
    icon: Layers,
    description:
      "Cardboard packaging is lightweight yet sturdy, offering excellent printability and versatility for retail, cosmetic, and food packaging.",
    images: [
      "/images/categories/retail_1.jpg",
      "/images/categories/retail_2.jpg",
      "/images/categories/retail_3.jpg",
    ],
  },
  {
    name: "Custom Corrugated",
    slug: "corrugated",
    icon: Box,
    description:
      "Corrugated packaging features fluted layers between flat sheets, providing superior strength and cushioning for shipping and heavy products.",
    images: [
      "/images/categories/mailer_1.jpg",
      "/images/categories/mailer_2.jpg",
      "/images/categories/mailer_3.jpg",
    ],
  },
  {
    name: "Custom Kraft",
    slug: "kraft",
    icon: Leaf,
    description:
      "Kraft packaging is made from natural unbleached fibers, offering an eco-friendly and rustic look perfect for organic and artisan products.",
    images: [
      "/images/categories/kraft_bakery_1.jpg",
      "/images/categories/kraft_bakery_2.jpg",
      "/images/categories/kraft_bakery_3.jpg",
    ],
  },
  {
    name: "Custom Rigid",
    slug: "rigid",
    icon: Gem,
    description:
      "Rigid boxes are premium non-collapsible packaging made from thick chipboard, ideal for luxury products, electronics, and high-end retail.",
    images: [
      "/images/categories/luxury_1.jpg",
      "/images/categories/luxury_2.jpg",
      "/images/categories/luxury_3.jpg",
    ],
  },
  {
    name: "Custom Chipboard",
    slug: "chipboard",
    icon: SquareStack,
    description:
      "Chipboard packaging is a cost-effective recycled paperboard, commonly used for cereal boxes, shoe boxes, and lightweight retail packaging.",
    images: [
      "/images/categories/kraft_chocolate_1.jpg",
      "/images/categories/kraft_chocolate_2.jpg",
    ],
  },
  {
    name: "Custom Paperboard",
    slug: "paperboard",
    icon: RectangleHorizontal,
    description:
      "Paperboard is a smooth, printable material perfect for folding cartons, cosmetic packaging, and pharmaceutical boxes.",
    images: [
      "/images/categories/cosmetic_1.jpg",
      "/images/categories/cosmetic_2.jpg",
    ],
  },
];

export const getShapeBySlug = (slug: string) =>
  shapes.find((s) => s.slug === slug);
export const getMaterialBySlug = (slug: string) =>
  materials.find((m) => m.slug === slug);
