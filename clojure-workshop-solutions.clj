; P3
(defn equalOne [number]
  (= number 1))

(filter equalOne [1, 2, 3, 1])

;P4
(filter even? [1, 2, 3, 1])

;P5
;Map - increase each number by 1
(map inc [1, 2, 3, 4, 5])
;Reduce
(defn isTrue [acc, curr]
  (or acc curr))
(reduce isTrue false [false, true, false, false])

; P6
(defn addX [X]
  (fn [number] (+ number X)))
(def addThree (addX 3))
(addThree 2)
