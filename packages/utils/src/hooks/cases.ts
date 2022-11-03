import { useTranslation } from "next-i18next";
import { Case } from "../types/cases";

export function useCases() {
	const { t } = useTranslation("cases");
	const cases = t("cases", {
		returnObjects: true,
	}) as Case[];

	return cases;
}
