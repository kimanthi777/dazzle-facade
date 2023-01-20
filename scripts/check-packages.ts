// TODO: Add Chalk, 

import "./package.json"

interface PackageJson {
    readonly name: string;
    readonly version: string;
    readonly private: boolean;
    readonly main: string;
    readonly license: string;
    readonly types?: string;
    readonly author: string;
    readonly sideEffects?: boolean;
    readonly scripts?: Record<string, string>;
    readonly peerDependencies?: Record<string, string>;
    readonly dependencies?: Record<string, string>;
    readonly devDependencies?: Record<string, string>;
}