    const questions = [
      {
        question: "Какой признак прежде всего используют для определения типа производства на предприятии?",
        answers: ["Число работников в административном аппарате", "Степень повторяемости операций и широта номенклатуры продукции", "Количество зданий на территории предприятия"],
        correct: 1,
        explanation: "Тип производства характеризуют, в частности, номенклатура изделий, масштаб выпуска и повторяемость операций на рабочих местах."
      },
      {
        question: "Какой тип производства предполагает выпуск широкого ассортимента изделий, обычно небольшими количествами или по индивидуальным заказам?",
        answers: ["Единичное", "Массовое", "Крупносерийное"],
        correct: 0,
        explanation: "Единичное производство ориентировано на разнообразную продукцию и отдельные заказы; повторяемость операций здесь невелика."
      },
      {
        question: "Как организован выпуск изделий при серийном типе производства?",
        answers: ["Каждое изделие изготавливается только один раз", "Продукцию выпускают партиями, повторяющимися через определённые интервалы", "Непрерывно выпускают однотипную продукцию в максимально больших объёмах"],
        correct: 1,
        explanation: "В серийном производстве изделия производят партиями; размер партии и частота её повторения зависят от разновидности серии."
      },
      {
        question: "Какой тип производства характеризуется длительным выпуском однородной продукции в больших количествах?",
        answers: ["Единичное", "Опытное", "Массовое"],
        correct: 2,
        explanation: "Массовое производство отличается узкой номенклатурой и большим объёмом устойчивого выпуска однородной продукции."
      },
      {
        question: "Для какого типа производства наиболее характерно закрепление одной операции за рабочим местом?",
        answers: ["Массового", "Единичного", "Ремонтного"],
        correct: 0,
        explanation: "При массовом выпуске повторяемость высока, поэтому рабочие места обычно специализируются на ограниченном наборе операций."
      },
      {
        question: "Что наиболее типично для единичного производства?",
        answers: ["Высокая универсальность оборудования и квалификация работников", "Жёсткая поточная линия для одного неизменного изделия", "Полная автоматизация каждого рабочего места"],
        correct: 0,
        explanation: "Широкая номенклатура и неповторяющиеся заказы требуют гибкого оборудования и работников высокой квалификации."
      },
      {
        question: "Какая разновидность серийного производства выпускает сравнительно небольшое количество изделий, а номенклатура продукции остаётся широкой?",
        answers: ["Массовое производство", "Мелкосерийное производство", "Крупносерийное производство"],
        correct: 1,
        explanation: "Мелкосерийное производство занимает промежуточное положение и по особенностям приближается к единичному."
      },
      {
        question: "Какой вариант серийного производства ближе всего по организации к массовому?",
        answers: ["Единичный", "Мелкосерийный", "Крупносерийный"],
        correct: 2,
        explanation: "В крупносерийном производстве партии велики, повторяемость выше, а оборудование и рабочие места сильнее специализированы."
      },
      {
        question: "Что означает специализация рабочего места?",
        answers: ["Закрепление за ним ограниченного набора однородных операций", "Передачу всех его функций другому предприятию", "Обязательное производство всех деталей готового изделия на этом месте"],
        correct: 0,
        explanation: "Специализация ограничивает номенклатуру операций или изделий на рабочем месте и помогает накапливать опыт их выполнения."
      },
      {
        question: "Что является характерным признаком поточной организации производства?",
        answers: ["Рабочие места расположены и связаны в порядке технологических операций, изделия передаются последовательно", "Каждый работник самостоятельно проходит все стадии изготовления", "Выпуск ведётся только по уникальным проектам"],
        correct: 0,
        explanation: "Поточная организация согласует рабочие места с последовательностью технологического процесса и направлением движения изделий."
      },
      {
        question: "Как называют время между выпуском двух последовательных изделий или партий на поточной линии?",
        answers: ["Технологический маршрут", "Такт потока", "Производственный цикл"],
        correct: 1,
        explanation: "Такт потока — интервал времени между последовательными выпусками изделий при заданном темпе работы линии."
      },
      {
        question: "При каких условиях особенно целесообразно применять поточную линию?",
        answers: ["При устойчивом массовом выпуске однотипной продукции", "При частой смене уникальных изделий и операций", "При изготовлении единственного экспериментального образца"],
        correct: 0,
        explanation: "Поток лучше всего работает при стабильной номенклатуре и достаточном объёме повторяющихся операций."
      },
      {
        question: "В чём состоит предметная специализация цеха?",
        answers: ["Цех специализируется на изготовлении определённого изделия или группы однородных изделий", "Цех выполняет одну технологическую операцию для всего завода", "Цех занимается исключительно учётом готовой продукции"],
        correct: 0,
        explanation: "При предметной специализации подразделение отвечает за изделие или его конструктивно завершённую часть."
      },
      {
        question: "Что характерно для технологической (операционной) специализации подразделений?",
        answers: ["Подразделение выпускает готовое изделие целиком", "Подразделение выполняет однородные операции для разных изделий", "Каждое подразделение обслуживает отдельный регион сбыта"],
        correct: 1,
        explanation: "Технологически специализированные участки объединяют по видам работ, например по обработке, сварке или окраске."
      },
      {
        question: "Что понимают под концентрацией производства?",
        answers: ["Сосредоточение значительного объёма выпуска на крупных предприятиях или подразделениях", "Разделение единого процесса на большее число мелких операций", "Размещение предприятия ближе к каждому отдельному покупателю"],
        correct: 0,
        explanation: "Концентрация означает увеличение масштабов производства и сосредоточение выпуска на более крупных производственных единицах."
      },
      {
        question: "Какой пример иллюстрирует кооперирование производства?",
        answers: ["Завод изготавливает все комплектующие самостоятельно", "Несколько предприятий по договору поставляют узлы для сборки общего изделия", "Предприятие прекращает выпуск продукции и продаёт оборудование"],
        correct: 1,
        explanation: "Кооперирование — это устойчивые производственные связи между предприятиями, совместно участвующими в изготовлении продукции."
      },
      {
        question: "В чём состоит комбинирование производства?",
        answers: ["Объединение на одном предприятии взаимосвязанных производств, часто разных стадий переработки сырья", "Распределение одного заказа между независимыми покупателями", "Выпуск только одного вида продукции без использования побочных продуктов"],
        correct: 0,
        explanation: "Комбинирование соединяет технологически связанные производства; примером может быть последовательная переработка сырья и отходов."
      },
      {
        question: "Какое утверждение об автоматизации производства верно?",
        answers: ["Автоматизация возможна только при единичном производстве", "Автоматизация может повысить производительность и стабильность операций, но требует затрат и обслуживания", "Автоматизация всегда полностью исключает контроль качества"],
        correct: 1,
        explanation: "Автоматизация помогает выполнять операции стабильнее, однако предполагает вложения, техническое обслуживание и контроль."
      },
      {
        question: "Почему переналадка оборудования особенно важна при мелкосерийном производстве?",
        answers: ["Потому что предприятие часто переходит между небольшими партиями разных изделий", "Потому что изделия никогда не сменяют друг друга", "Потому что оборудование при таком типе производства не используется"],
        correct: 0,
        explanation: "Частая смена партий повышает долю времени на переналадку; быстрая переналадка помогает уменьшить потери."
      },
      {
        question: "Предприятие ежедневно выпускает десятки тысяч одинаковых бутылок на согласованной линии. Какой вывод наиболее обоснован?",
        answers: ["Это единичное производство с универсальной специализацией", "Это массовое производство, для которого характерна высокая повторяемость операций", "Это мелкосерийное производство, поскольку продукция выпускается партиями"],
        correct: 1,
        explanation: "Большой устойчивый выпуск однородного изделия и повторяющиеся операции указывают на массовый тип производства."
      }
    ];

    const quizScreen = document.getElementById("quizScreen");
    const resultScreen = document.getElementById("resultScreen");
    const questionCount = document.getElementById("questionCount");
    const scorePill = document.getElementById("scorePill");
    const progressTrack = document.getElementById("progressTrack");
    const progressFill = document.getElementById("progressFill");
    const questionText = document.getElementById("questionText");
    const answersContainer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");
    const hint = document.getElementById("hint");
    const nextButton = document.getElementById("nextButton");
    const restartButton = document.getElementById("restartButton");

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      const item = questions[currentQuestion];
      questionCount.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
      scorePill.innerHTML = `★ &nbsp;${score} ${score === 1 ? "балл" : score > 1 && score < 5 ? "балла" : "баллов"}`;
      progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
      progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
      questionText.textContent = item.question;
      feedback.className = "feedback";
      feedback.textContent = "";
      hint.textContent = "Выбери один вариант ответа";
      nextButton.disabled = true;
      nextButton.innerHTML = currentQuestion === questions.length - 1
        ? "Посмотреть результат <span aria-hidden=\"true\">→</span>"
        : "Следующий вопрос <span aria-hidden=\"true\">→</span>";
      answered = false;

      answersContainer.replaceChildren();
      item.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.innerHTML = `<span class="answer-letter">${String.fromCharCode("А".charCodeAt(0) + index)}</span><span class="answer-text"></span>`;
        button.querySelector(".answer-text").textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
      });
    }

    function selectAnswer(selectedIndex) {
      if (answered) return;
      answered = true;
      const item = questions[currentQuestion];
      const answerButtons = answersContainer.querySelectorAll(".answer");
      answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === item.correct) button.classList.add("is-correct");
        if (index === selectedIndex && selectedIndex !== item.correct) button.classList.add("is-wrong");
      });

      const isCorrect = selectedIndex === item.correct;
      if (isCorrect) score += 1;
      scorePill.innerHTML = `★ &nbsp;${score} ${score === 1 ? "балл" : score > 1 && score < 5 ? "балла" : "баллов"}`;
      feedback.className = `feedback visible ${isCorrect ? "correct" : "incorrect"}`;
      feedback.innerHTML = `<strong>${isCorrect ? "Верно! +1 балл" : "Не совсем."}</strong>${item.explanation}`;
      hint.textContent = isCorrect ? "Отлично, продолжаем!" : "Правильный вариант отмечен выше";
      nextButton.disabled = false;
    }

    function showResults() {
      quizScreen.classList.add("hidden");
      resultScreen.classList.add("visible");
      document.getElementById("resultScore").innerHTML = `${score} <small>/ ${questions.length}</small>`;
      const assessment = score >= 18 ? "Отлично!"
        : score >= 15 ? "Хорошо!"
        : score >= 10 ? "Удовлетворительно."
        : "Нужно повторить материал.";
      document.getElementById("resultAssessment").textContent = assessment;
      document.querySelector(".result-icon").textContent = score >= 15 ? "✦" : "↗";
    }

    nextButton.addEventListener("click", () => {
      if (!answered) return;
      if (currentQuestion === questions.length - 1) {
        showResults();
        return;
      }
      currentQuestion += 1;
      renderQuestion();
    });

    restartButton.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      resultScreen.classList.remove("visible");
      quizScreen.classList.remove("hidden");
      renderQuestion();
    });

    renderQuestion();
