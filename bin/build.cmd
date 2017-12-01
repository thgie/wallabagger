Set t=%*
If Not Defined t GOTO END

If %1==chrome  GOTO WORK
If %1==firefox GOTO WORK
If %1==edge    GOTO WORK
GOTO END

:WORK
set target=%1
echo build for %target%
rd /S /Q build\%target%
md build\%target%
copy manifest\%target%\manifest.json build\%target%
xcopy /E /Y source build\%target%
md build\%target%\img
copy images\%target%\*.* build\%target%\img
md build\%target%\_locales
xcopy /E /Y locales build\%target%\_locales
::echo %%i
::

:END
echo this is the end
