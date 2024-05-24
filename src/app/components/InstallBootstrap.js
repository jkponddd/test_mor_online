"use client"
import { useEffect } from "react";

export default function installBootstrap() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    return <></>;
}