const houston_chef = new Proxy({"src":"/_astro/houston_chef.BhDvCQBg.webp","width":52,"height":54,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/Images _ Docs_files/houston_chef.webp";
							}
							
							return target[name];
						}
					});

export { houston_chef as default };
