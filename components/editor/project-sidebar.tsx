"use client";

import { FolderOpen, Plus, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onNewProject?: () => void;
}

export function ProjectSidebar({
  id,
  isOpen,
  onClose,
  onNewProject,
}: ProjectSidebarProps) {
  return (
    <aside
      id={id}
      aria-labelledby={`${id}-title`}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
      className={cn(
        "absolute inset-y-3 left-3 z-20 flex w-80 max-w-[calc(100%-1.5rem)] flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface/95 shadow-xl backdrop-blur-md transition-transform duration-200 ease-out motion-reduce:transition-none",
        isOpen ? "translate-x-0" : "pointer-events-none -translate-x-[calc(100%+1rem)]",
      )}
    >
      <header className="flex shrink-0 items-center justify-between border-b border-surface-border p-4">
        <h2 id={`${id}-title`} className="text-sm font-semibold text-copy-primary">
          Project
        </h2>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-xl text-copy-muted"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X className="size-5" aria-hidden="true" />
        </Button>
      </header>

      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 gap-4 p-4">
        <TabsList aria-label="Project lists" className="w-full shrink-0 rounded-xl">
          <TabsTrigger value="my-projects" className="rounded-xl">My Projects</TabsTrigger>
          <TabsTrigger value="shared" className="rounded-xl">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="min-h-0 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center gap-3 px-4 py-8 text-center text-copy-muted">
            <FolderOpen className="size-8" aria-hidden="true" />
            <p>No projects yet.</p>
          </div>
        </TabsContent>
        <TabsContent value="shared" className="min-h-0 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center gap-3 px-4 py-8 text-center text-copy-muted">
            <Users className="size-8" aria-hidden="true" />
            <p>No shared projects yet.</p>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="shrink-0 border-t border-surface-border p-4">
        <Button
          type="button"
          className="h-10 w-full rounded-xl"
          onClick={onNewProject}
          disabled={!onNewProject}
          title={onNewProject ? undefined : "Project creation is coming soon"}
        >
          <Plus className="size-5" aria-hidden="true" />
          New Project
        </Button>
      </footer>
    </aside>
  );
}
