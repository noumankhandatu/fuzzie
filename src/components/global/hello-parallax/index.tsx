"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";
import { products } from "@/lib/raw-data";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}

