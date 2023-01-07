import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function useParams(
    key: string,
    params: Params,
    initialValue: any,
    checkValue: (newValue: any, oldValue: any) => any,
) {
    const router = useRouter();

    const [value, setValue] = useState<any>(initialValue);

    const onSetValue = useCallback(
        (newValue: any) => {
            setValue((old: any) => {
                const checked = checkValue(newValue, old);
                return checked;
            });
        },
        [key],
    );

    useEffect(() => {
        const newQuery = { ...params };
        delete newQuery[key];

        const addToQuery =
            (typeof value as any) === "[]"
                ? value.length > 0
                : true && value !== undefined && value !== null;

        const queries = {
            ...newQuery,
            ...(addToQuery ? { [key]: value } : {}),
        };

        router.push(
            {
                pathname: router.pathname,
                query: queries,
            },
            undefined,
            {
                scroll: false,
            },
        );
    }, [value]);

    return [value, onSetValue];
}
