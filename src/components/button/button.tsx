import React, {HTMLAttributes} from "react";
import {Link} from "gatsby";
import classNames from "classnames";
import * as Styles from "./button.module.scss";

export type ButtonProps = HTMLAttributes<HTMLElement>;

const Button = ({className, children, ...props}: ButtonProps): JSX.Element => (
    <div className={classNames(Styles.button, className)} {...props}>
        {children}
    </div>
);

export interface LinkButtonProps extends ButtonProps {
    to: string;
}

const LinkButton = ({className, children, ...props}: LinkButtonProps): JSX.Element => (
    <Link
        className={Styles.link}
        {...props}
    >
        <Button className={className}>
            {children}
        </Button>
    </Link>
);

export default Button;
export {LinkButton};
