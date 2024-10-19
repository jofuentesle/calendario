const Img1 = new Proxy({"src":"/_astro/SobremesaEspiral.CRDt8zAT.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral.jpg";
							}
							
							return target[name];
						}
					});

export { Img1 as default };
