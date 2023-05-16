import { useEffect } from "react";

function useSwipe(id, onSwipeRight, onSwipeLeft) {
  useEffect(() => {
    const touchsurface = document.getElementById(id);
    if (!touchsurface) {
      return;
    }

    let startX,
      startY,
      dist,
      threshold = 100,
      allowedTime = 300,
      elapsedTime,
      startTime;

    function handleSwipe(touchobj) {
      dist = touchobj.pageX - startX;
      elapsedTime = new Date().getTime() - startTime;
      const isRightSwipe =
        elapsedTime <= allowedTime &&
        dist >= threshold &&
        Math.abs(touchobj.pageY - startY) > 0;

      const isLeftSwipe =
        elapsedTime <= allowedTime && Math.abs(dist) >= threshold && dist < 0;

      if (isRightSwipe && onSwipeRight) {
        onSwipeRight();
      } else if (isLeftSwipe && onSwipeLeft) {
        onSwipeLeft();
      }
    }

    function handleTouchStart(e) {
      const touchobj = e.changedTouches[0];
      dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }

    function handleTouchMove(e) {
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      const touchobj = e.changedTouches[0];
      handleSwipe(touchobj);
      e.preventDefault();
    }

    touchsurface.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    touchsurface.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    touchsurface.addEventListener("touchend", handleTouchEnd, {
      passive: false,
    });

    return () => {
      touchsurface.removeEventListener("touchstart", handleTouchStart);
      touchsurface.removeEventListener("touchmove", handleTouchMove);
      touchsurface.removeEventListener("touchend", handleTouchEnd);
    };
  }, [id, onSwipeRight, onSwipeLeft]);
}

export default useSwipe;
