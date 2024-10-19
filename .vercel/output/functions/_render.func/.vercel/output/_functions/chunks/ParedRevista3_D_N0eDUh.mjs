const Img4 = new Proxy({"src":"/_astro/ParedRevista3.C6mqDEyE.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/pared/ParedRevista3.jpg";
							}
							
							return target[name];
						}
					});

export { Img4 as default };
