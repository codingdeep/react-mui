import {act, renderHook} from '@testing-library/react';
import {useCounter} from "../useCounter";

describe("user counter", () => {
    it('should render the hook', function () {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0)
    });
    it('should render the hook with initial props', function () {
        const {result} = renderHook(useCounter, {initialProps: {initialCount: 2}});
        expect(result.current.count).toBe(2)
    });
    it('should increment the count', function () {
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1)
    });
    it('should decrement the count', function () {
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1)
    });
})