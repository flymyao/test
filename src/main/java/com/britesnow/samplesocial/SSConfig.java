package com.britesnow.samplesocial;

import java.io.IOException;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.britesnow.samplesocial.web.SSAuthRequest;
import com.britesnow.snow.web.auth.AuthRequest;
import com.britesnow.snow.web.binding.EntityClasses;
import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.britesnow.snow.web.db.hibernate.HibernateDaoHelperImpl;
import com.google.inject.AbstractModule;
import com.google.inject.Inject;
import com.google.inject.Provides;
import com.google.inject.Singleton;


/**
 * TODO: Rename the package and the class name to fit your application naming convention and
 * update /webapp/WEB-INF/snow.properties "snow.webApplicationModules" accordingly
 * <p/>
 * TODO: add/remove bindings to fit your application's need
 */
public class SSConfig extends AbstractModule {
    private static Logger log = LoggerFactory.getLogger(SSConfig.class);

    @Override
    protected void configure() {

        // Default bind for the HibernateDaoHelper.
        bind(HibernateDaoHelper.class).to(HibernateDaoHelperImpl.class);
      bind(AuthRequest.class).to(SSAuthRequest.class);
    }

    // Used by the Hibernate support to inject the entity class
    @Provides
    @Singleton
    @Inject
    @EntityClasses
    public Class[] provideEntityClasses() {
        Set<Class<?>> entitySet = null;
            Class[] entityClasses = new Class[entitySet.size()];
            entitySet.toArray(entityClasses);
            return entityClasses;

    }

}
