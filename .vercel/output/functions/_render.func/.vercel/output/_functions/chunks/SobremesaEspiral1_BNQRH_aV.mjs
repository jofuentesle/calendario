const Img2 = new Proxy({"src":"/_astro/SobremesaEspiral1.5XSbPj2n.jpg","width":768,"height":466,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/mesa/SobremesaEspiral1.jpg";
							}
							
							return target[name];
						}
					});

export { Img2 as default };
