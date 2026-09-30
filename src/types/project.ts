import type { LucideIcon } from 'lucide-react';

export type ProjectVisibility = 'commercial' | 'private' | 'public';

export type Project = {
    name: string;
    type: string;
    icon: LucideIcon;
    desc: string;
    tags: string[];
    features: string[];
    link?: string;
    allowed: ProjectVisibility;
};