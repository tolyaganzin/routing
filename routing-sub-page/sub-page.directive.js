'use strict';

// Register myCurrentTime directive

angular.
  module('subPage').
  directive('myCurrentTime', ['$timeout', 'dateFilter',
    function($timeout, dateFilter) {
      // возвращаем функцию линковки директивы. (компилировать функцию не нужно)
      return function(scope, element, attrs) {
        var format,  // формат даты
            timeoutId; // timeoutId, так что мы можем останавливать обновление времени

        // используя обновление UI
        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        // проверка выражения и обновление UI при изменении.
        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          updateTime();
        });

        // расписание обновлений за секунду
        function updateLater() {
          // сохраняем timeoutId для отмены
          timeoutId = $timeout(function() {
            updateTime(); // обновляем DOM
            updateLater(); // расписание других обновлений
          }, 100);
        }

        // прослушиваем разрушающее (removal) DOM событие, и отменяем следующее обновление UI
        // для предотвращения обновления времени после того как DOM-элемент был удален.
        element.bind('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        updateLater(); // убиваем процесс обновления UI.
      }
    }]);
