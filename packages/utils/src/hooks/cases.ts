import { useTranslation } from "next-i18next";
import { Case } from "../types/cases";

export function useCases() {
	const { t } = useTranslation("cases");
	const casesObject = t("cases", {
		returnObjects: true,
	});

	const casesArray = Object.entries(casesObject).map(([key, value]) => ({
		...(value as unknown as Case),
		handle: key,
	}));

	return casesArray as unknown as Case[];
}

export function useCase(handle: string) {
	const { t } = useTranslation("cases");

	const casesObject = t("cases", {
		returnObjects: true,
	}) as Record<string, Case>;

	return casesObject[handle] as unknown as Case;
}

export function useSiblingCases(handle: string) {
	const { t } = useTranslation("cases");

	const casesObject = t("cases", {
		returnObjects: true,
	}) as Record<string, Case>;

	const keys = Object.keys(casesObject);

	const index = keys.indexOf(handle);

	const left = casesObject[keys[index - 1]]
		? {
				...casesObject[keys[index - 1]],
				handle: keys[index - 1],
		  }
		: undefined;
	const right = casesObject[keys[index + 1]]
		? {
				...casesObject[keys[index + 1]],
				handle: keys[index + 1],
		  }
		: undefined;

	return {
		left,
		right,
	};
}
