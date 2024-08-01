// src/app/404/page.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/404.module.css'; // Importa los estilos si los tienes

const Custom404: React.FC = () => {
    useEffect(() => {
        // Intenta abrir la aplicación
        window.location.href = 'myapp://path-to-content';

        // Si la aplicación no está instalada, redirige al Play Store después de un breve retraso
        const timer = setTimeout(() => {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.papagayodev.fortaleza';
        }, 0); // Ajusta el tiempo según sea necesario

        // Cleanup timer if component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.description}>The page you are looking for does not exist.</p>
            <Link href="/" className={styles.link}>
                Go back home
            </Link>
        </div>
    );
};

export default Custom404;
