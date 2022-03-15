import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assumptions.assumingThat;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @ParameterizedTest
    @ValueSource(ints = {1, 2})
    @DisplayName("Sumar dos numeros enteros")
    void add(int x) {
        assumingThat(x == 1,
                () -> {
                    assertEquals(2, Calculator.add(4, 2),"El valor de la suma no es el esperado: linea 15");
                });
        assertTrue(3 > Calculator.add(1,1),"El valor de la suma es mayor a 3: linea 15");
    }

    @RepeatedTest(value =5,name = "Repeticion numero: {currentRepetition} de {totalRepetitions}")
    @DisplayName("Multiplicar dos numeros enteros")
    void multiply() {
        assertAll(() -> assertEquals(4, Calculator.multiply(2, 2),"Error 1"),
                () -> assertEquals(-4, Calculator.multiply(2, -2), "Error 2"),
                () -> assertEquals(4, Calculator.multiply(2, -2), "Error 3"),
                () -> assertEquals(0, Calculator.multiply(1, 0),"Error 4"));
    }
}