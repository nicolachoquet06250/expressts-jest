export default interface Package {
    name: string,
    description: string,
    version: string,
    main: string,
    scripts: any,
    author: string,
    licence: string,
    dependencies: any,
    devDependencies: any
}