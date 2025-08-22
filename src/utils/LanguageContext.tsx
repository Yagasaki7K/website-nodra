import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { useRouter } from "next/router";

const LANGUAGE_STORAGE_KEY = "user-language";

interface LanguageContextData {
	language: string;
	setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextData | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const router = useRouter();
	const [language, setLanguageState] = useState<string>("en");

	// Carrega do localStorage e aplica no router
	useEffect(() => {
		if (typeof window === "undefined") return;
		const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
		if (storedLang) {
			setLanguageState(storedLang);
			if (router.locale !== storedLang) {
				router.push(router.pathname, router.asPath, { locale: storedLang });
			}
		}
	}, []);

	const setLanguage = (newLang: string) => {
		if (newLang === language) return;
		setLanguageState(newLang);
		if (typeof window !== "undefined") {
			localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
		}
		router.push(router.pathname, router.asPath, { locale: newLang });
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

// Hook para usar o contexto
export const useLanguage = (): LanguageContextData => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
