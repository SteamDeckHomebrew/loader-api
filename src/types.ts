import type { ComponentType, ReactNode } from 'react';
import { RouteProps } from 'react-router';

export type RoutePatch = (route: RouteProps) => RouteProps;

export interface RouterHook {
  addRoute(path: string, component: ComponentType, props?: Omit<RouteProps, 'path' | 'children'>): void;
  addPatch(path: string, patch: RoutePatch): RoutePatch;
  addGlobalComponent(name: string, component: ComponentType): void;
  removeRoute(path: string): void;
  removePatch(path: string, patch: RoutePatch): void;
  removeGlobalComponent(name: string): void;
}

export interface ToastData {
  title: ReactNode;
  body: ReactNode;
  onClick?: () => void;
  logo?: ReactNode;
  icon?: ReactNode;
  className?: string;
  contentClassName?: string;
  duration?: number;
  critical?: boolean;
  eType?: number;
  sound?: number;
  playSound?: boolean;
  showToast?: boolean;
}

export interface Toaster {
  toast(toast: ToastData): void;
}

export interface FilePickerRes {
  path: string;
  realpath: string;
}

export const enum FileSelectionType {
  FILE,
  FOLDER,
}

export interface DeckyRequestInit extends RequestInit {
  excludedHeaders: string[];
}

export interface Plugin {
  name: string;
  version?: string;
  icon: JSX.Element;
  content?: JSX.Element;
  onDismount?(): void;
  alwaysRender?: boolean;
  titleView?: JSX.Element;
}

export type DefinePluginFn = () => Plugin;
