import { LinkProps } from "@prismicio/react";
import { ReactElement } from "react";

export interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}