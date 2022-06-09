import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";
import { ActiveLinkProps } from "../../models/activeLinkProps";

export function ActiveLink({children, activeClassName, ...rest} : ActiveLinkProps){
    
    const { asPath } = useRouter();

    const className = asPath === rest.href
    ? activeClassName
    : '';
    
    return(
        <Link {...rest}>
            {cloneElement(children,{
                className
            })}
        </Link>
    )
}