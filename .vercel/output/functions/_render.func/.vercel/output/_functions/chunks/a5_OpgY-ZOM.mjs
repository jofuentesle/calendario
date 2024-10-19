const a5 = new Proxy({"src":"/_astro/a5.J1jt1sqS.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/forms/a5.png";
							}
							
							return target[name];
						}
					});

export { a5 as default };
