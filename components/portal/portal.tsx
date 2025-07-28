"use client";

import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom'; 

interface PortalProps {
  children: React.ReactNode;
  wrapperId?: string; 
}

export default function Portal({ children, wrapperId = 'portal-root' }: PortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false; 
    if (!element) {
      systemCreated = true;
      element = document.createElement('div');
      element.setAttribute('id', wrapperId);
      document.body.appendChild(element);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]); 

  if (!wrapperElement) {
    return null;
  }

  return createPortal(children, wrapperElement);
}