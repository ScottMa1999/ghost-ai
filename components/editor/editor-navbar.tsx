"use client";

import type { ReactNode, Ref } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  sidebarId: string;
  onToggleSidebar: () => void;
  toggleRef?: Ref<HTMLButtonElement>;
  children?: ReactNode;
}

export function EditorNavbar({
  isSidebarOpen,
  sidebarId,
  onToggleSidebar,
  toggleRef,
  children,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <nav
      aria-label="Editor"
      className="z-30 grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-surface-border bg-surface px-4"
    >
      <div className="flex items-center justify-start">
        <Button
          ref={toggleRef}
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-xl text-copy-secondary"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls={sidebarId}
          onClick={onToggleSidebar}
        >
          <SidebarIcon className="size-5" aria-hidden="true" />
        </Button>
      </div>
      <div className="flex min-w-0 items-center justify-center">{children}</div>
      <div className="flex items-center justify-end" />
    </nav>
  );
}
