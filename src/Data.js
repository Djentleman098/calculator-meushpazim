
const Data =  [
            // type 1 = zakaut, type 2 = hatava
        {id: 1, type: 1, name: 'החזר אובדן ימי עבודה למלווה באשפוז או שיקום',
        text: "לבני המשפחה המלווים את הפצוע יש אופציה לקבל החזר על ימי העבודה אותם הפסידו בתקופת האשפוז. הסכום הראשוני עומד על שכר המנימום – 5,880 ₪, אם הרוויחו יותר ניתן להגיש באופן יזום בקשה להשלמה. ההשלמה עד לסכום מקסימלי של 49,030 ₪.",
        extraText: `• איך מגישים את הבקשה? יש להגיש תלושי שכר של 3 חודשים טרם האשפוז, את התשלום ניתן לקבל לחשבון הבנק של המלווה / לחשבון המעסיק ע"מ לשמור על תלושי השכר תקינים. • החזר על ימי מחלה / חופשה: במידה והמלווה השלים את משכורתו עד עכשיו בימי מחלה / חופשה, ניתן לבקש שהתשלום יועבר למעסיקו ושזה יחזיר לו את ימי המחלה והחופשה. • מלווים: o הגדרת המלווה: המלווה יכול להיות כל אדם הנמצא ליד הפצוע המעגל הקרוב, עדיפות לאישה / הורים / בן -בת זוג / אחים / דוד, ניתן לבקש על חבר באופן חריג. o כמות המלווים: ▪ בתקופת האשפוז - זכאים 2 מלווים להחזר על אובדן ימי עבודה. ▪ בתקופת השיקום – זכאי מלווה אחד. ניתן להגיש בקשה חריגה ע"מ להמשיך עם 2 מלווים במידה והפצוע נדרש בכך גם בתקופת השיקום.`},
        {id: 2, type: 1, name: 'הוצאות בגין אשפוז- מענק חודשי',
        text: "המענק מועבר אוטומטית לחשבון הפצוע, עד כשבועיים לאחר תחילת האשפוז (גם אם שוחרר מאשפוז). המענק יועבר אוטומטית בתחילת כל חודש אשפוז נוסף כל עוד האשפוז נמשך. (יועבר ביום האשפוז ה - 1, ה - 31, 61 וכו'. לא בתחילת חודש קלנדרי).",
        extraText: null},
        {id: 3, type: 1, name: 'הוצאות בגין אשפוז- מענק חודשי',
        text: "המענק מועבר אוטומטית לחשבון הפצוע, עד כשבועיים לאחר תחילת האשפוז (גם אם שוחרר מאשפוז). המענק יועבר אוטומטית בתחילת כל חודש אשפוז נוסף כל עוד האשפוז נמשך. (יועבר ביום האשפוז ה - 1, ה - 31, 61 וכו'. לא בתחילת חודש קלנדרי).",
        extraText: null},
        {id: 4, type: 1, name: 'הוצאות נסיעה וכלכלה חודשיות',
        text: `מענק חודשי ע"ס 11,570 ש"ח שישולם לחשבון המשפחה הגרעינית בשתי פעימות - מקדמה והמשך המענק בתום האשפוז / בתום 30 ימי אשפוז. המקדמה  בסך 3,000 ש"ח תועבר לחשבון המשפחה בתחילת כל חודש אשפוז כל עוד הפצוע מאושפז (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,1- ,31 61 וכו). במידה ויושלם חודש אשפוז המשפחה תקבל את ההפרש וההשלמה ל 11,570 ₪ (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה - 30, 60, 90 וכו). במידה והפצוע לא השלים חודש אישפוז ישולם סכום המענק לפי 380 ש"ח ליום אשפוז בניכוי המקדמה. פצוע ששוחרר לאחר מס' ימים לא ידרש להחזיר את המקדמה.`,
        extraText: `• משפחה גרעינית: אישה / הורים o במידה ונשוי אישה קודמת להורים o ניתן לחלק את המענק שווה בשווה, בין האישה וההורים באישור הפצוע. o במידה וההורים גרושים, ניתן לחלק בניהם את המענק. o במידה והורים גרושים אך הפצוע אינו בקשר עם אחד ההורים, יש להוסיף מכתב המסביר זאת. o במידה והפצוע מורדם, האישה קובעת האם לחלק את המענק. o במידה והפצוע חייל בודד, שאינו בקשר עם משפחתו / משפחתו אינה שוהה בארץ, ניתן לבקש שהמענק יועבר לאדם אחר הנמצא עימו באשפוז, יש להוסיף מכתב המסביר זאת.`},
        {id: 5, type: 1, name: 'הוצאות נסיעה וכלכלה חודשיות',
        text: `מענק חודשי ע"ס 11,570 ש"ח שישולם לחשבון המשפחה הגרעינית בשתי פעימות - מקדמה והמשך המענק בתום האשפוז / בתום 30 ימי אשפוז. המקדמה  בסך 6,000 ש"ח תועבר לחשבון המשפחה בתחילת כל חודש אשפוז כל עוד הפצוע מאושפז (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה,1- ,31 61 וכו). במידה ויושלם חודש אשפוז המשפחה תקבל את ההפרש וההשלמה ל 11,570 ₪ (חודש אשפוז ולא חודש קלנדרי, ביום האשפוז ה - 30, 60, 90 וכו). במידה והפצוע לא השלים חודש אישפוז ישולם סכום המענק לפי 380 ש"ח ליום אשפוז בניכוי המקדמה. פצוע ששוחרר לאחר מס' ימים לא ידרש להחזיר את המקדמה.`,
        extraText: `• משפחה גרעינית: אישה / הורים o במידה ונשוי אישה קודמת להורים o ניתן לחלק את המענק שווה בשווה, בין האישה וההורים באישור הפצוע. o במידה וההורים גרושים, ניתן לחלק בניהם את המענק. o במידה והורים גרושים אך הפצוע אינו בקשר עם אחד ההורים, יש להוסיף מכתב המסביר זאת. o במידה והפצוע מורדם, האישה קובעת האם לחלק את המענק. o במידה והפצוע חייל בודד, שאינו בקשר עם משפחתו / משפחתו אינה שוהה בארץ, ניתן לבקש שהמענק יועבר לאדם אחר הנמצא עימו באשפוז, יש להוסיף מכתב המסביר זאת.`},
        {id: 6, type: 1, name: 'כרטיס גודיס',
        text: "כרטיס גודיס אישי המוטען ב- 500 ₪ כל שבוע ומשויך שמית לפצוע שנמצא באשפוז. הסכום אינו נצבר לשבוע שלאחר מכן. במידה וזמן האשפוז היה קצר והחייל שוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית. כאשר הפצוע משתחרר- הכרטיס נחסם, אין צורך להזדכות עליו.",
        extraText: null},
        {id: 7, type: 1, name: 'כרטיס גודיס',
        text: "כרטיס גודיס אישי המוטען ב- 500 ₪ כל שבוע ומשויך שמית לפצוע שנמצא באשפוז. הסכום אינו נצבר לשבוע שלאחר מכן. במידה וזמן האשפוז היה קצר והחייל שוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית. כאשר הפצוע משתחרר- הכרטיס נחסם, אין צורך להזדכות עליו.",
        extraText: null},
        {id: 8, type: 1, name: 'מענק אשפוז חד פעמי',
        text: "המענק יועבר אוטומטית לחשבון הפצוע בתקופת האשפוז הראשונה, עד כשבועיים לאחר תחילת האשפוז. המענק ישולם גם במידה והפצוע שוחרר מאשפוז.",
        extraText: null},
        {id: 9, type: 1, name: 'תווי סיוע כלכלי ע"ס 5,000 ₪',
        text: "תווי סיוע כלכלי בסך 5,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית.",
        extraText: null},
        {id: 10, type: 1, name: 'תווי סיוע כלכלי ע"ס 1,000 ₪',
        text: "תווי סיוע כלכלי בסך 1,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית.",
        extraText: null},
        {id: 11, type: 1, name: 'תווי סיוע כלכלי ע"ס 5,000 ₪',
        text: "תווי סיוע כלכלי בסך 5,000 ₪. ניתן בעת האשפוז בלבד. במידה וזמן האשפוז של החייל היה קצר ושוחרר טרם קבלת התווים לא ניתן לקבל רטרואקטיבית.",
        extraText: null},
        
        {id: 12, type: 2, name: 'אובדן ציוד אישי/ צבאי',
        text: 'במידה ויש צורך בהחזר עבור אובדן ציוד אישי/ צבאי ניתן לפנות לקצינת הנפגעים.'},
        {id: 13, type: 2, name: 'תעודות',
        text: `במידה ויש צורך להפיק מחדש תעודות כמו: תעודת שחרור בכבוד, תעודת לוחם, תעודת חוגר, תעודת משרת מילואים פעיל וכו' יש לפנות לקצינת הנפגעים.`},
        {id: 14, type: 2, name: 'סיוע כלכלי',
        text: `במידה ויש צורך בסיוע כלכלי נוסף ניתן לפנות לקצינת הנפגעים.`},
        {id: 15, type: 2, name: 'סיוע כלכלי',
        text: `במידה ויש צורך בסיוע כלכלי נוסף ניתן לפנות לקצינת הנפגעים או לקרן הסיוע לחיילי מילואים בכתובת ....`},
        {id: 16, type: 2, name: 'הלנה',
        text: `במידה ויש צורך בסיוע בהלנה למלווים ניתן לפנות לנציגי ר"מ 2.`},
        {id: 17, type: 2, name: 'טיפול נפשי לפצוע ו/או לבני משפחתו',
        text: `במידה ויש צורך בטיפול נפשי לפצוע או לבני משפחה ניתן לפנות לקצינת הנפגעים. השירות יינתן לקרבה ראשונה בלבד, לאחים מעל גיל 7, המענה יינתן בצורה פרונטלית / מפגשי זום במפגש אישי. לא ניתן לקיים מפגשים משפחתיים/ זוגיים.`},
        {id: 18, type: 2, name: 'החזרים על הוצאות',
        text: `במידה וישנן הוצאות ששולמו מכספו של החייל / המשפחה כגון טלפון שניזוק ותוקן, פריטים נחוצים לאשפוז (רכישת נעליים לשיקום, מתקנים מותאמים למיטה וכו'), ניתן להגיש בקשה להחזרים דרך קצינת הנפגעים. לא כולל החזר על משקפי ראייה לחיילי חובה.`},
        {id: 19, type: 2, name: 'טיפולים רפואיים, טיפול נפשי לפצוע ו/או לבני משפחה, ציוד רפואי - לפצועים, התאמות דיור',
        text: `ישנן זכאויות נוספות במעטפת השיקום האישית הניתנת ע"י משהב"ט, לבירור ניתן לפנות לעובדת השיקום המלווה או לאיזור האישי באתר משהב"ט.`},
        ];

export default Data;
