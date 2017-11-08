; Function defintion example
(defn foo [a b c]
  (* a b c))

; To print:
(println "hello, world")

; Closure Code
(defn messenger-builder [greeting]
  (fn [who] (println greeting who)))
(def hello-er (messenger-builder "Hello"))
(hello-er "world!")

