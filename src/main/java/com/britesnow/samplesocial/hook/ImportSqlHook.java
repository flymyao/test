package com.britesnow.samplesocial.hook;

import com.britesnow.snow.web.binding.ApplicationProperties;
import com.britesnow.snow.web.hook.AppPhase;
import com.britesnow.snow.web.hook.annotation.WebApplicationHook;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.apache.tools.ant.Project;
import org.apache.tools.ant.taskdefs.SQLExec;
import org.apache.tools.ant.types.EnumeratedAttribute;

import java.io.File;
import java.io.FileFilter;
import java.util.Map;

@Singleton
public class ImportSqlHook {
    @Inject
    @ApplicationProperties
    private Map cfg;

    @WebApplicationHook(phase = AppPhase.INIT)
    public void importSql() {
        String importSql = (String) cfg.get("sql.import");
        if (importSql != null && Boolean.parseBoolean(importSql)) {

            String driver = (String) cfg.get("hibernate.connection.driver_class");
            String url = (String) cfg.get("hibernate.connection.url");
            String user = (String) cfg.get("hibernate.connection.username");
            String passwd = (String) cfg.get("hibernate.connection.password");
            String src = (String) cfg.get("sql.import.src");
            if (driver != null && url != null && user != null && passwd != null && src != null) {
                SQLExec sqlExec = new SQLExec();
                sqlExec.setDriver(driver.trim());
                sqlExec.setUrl(url.trim());
                sqlExec.setUserid(user.trim());
                sqlExec.setPassword(passwd.trim());

                sqlExec.setOnerror((SQLExec.OnError) (EnumeratedAttribute.getInstance(SQLExec.OnError.class, "abort")));
                sqlExec.setPrint(true);
                //sqlExec.setOutput(new File("src/sql.out"));
                sqlExec.setProject(new Project());
                File srcFile = new File(src.trim());
                if (srcFile.exists() && srcFile.isDirectory()) {
                    File[] files = srcFile.listFiles(new FileFilter() {
                        @Override
                        public boolean accept(File pathname) {
                            return pathname.isFile() && pathname.getAbsolutePath().endsWith(".sql");
                        }
                    });
                    for (File file : files) {
                        sqlExec.setSrc(file);
                        sqlExec.execute();
                    }
                }else{
                    sqlExec.setSrc(new File(src.trim()));
                    sqlExec.execute();
                }

            }

        }
    }
}
