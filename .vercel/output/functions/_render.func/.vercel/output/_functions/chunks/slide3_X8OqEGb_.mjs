const Img3 = new Proxy({"src":"/_astro/slide3.AwdkZWTR.jpg","width":1800,"height":541,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Jordi/Documents/web/calendaris/src/assets/images/calendarios/slide3.jpg";
							}
							
							return target[name];
						}
					});

export { Img3 as default };
